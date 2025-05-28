#!/usr/bin/env python3
"""Module that handles deletion-resilient pagination."""
import csv
from typing import List, Dict


class Server:
    """Server class for deletion-resilient pagination."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Loads and caches the dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE, newline='') as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Creates and caches an indexed version of the dataset"""
        if self.__indexed_dataset is None:
            self.__indexed_dataset = {
                i: row for i, row in enumerate(self.dataset())
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> dict:
        """
        Return a dictionary with pagination information, resilient to deletions.
        """
        assert index is not None and index >= 0
        indexed_data = self.indexed_dataset()
        assert index < max(indexed_data.keys()) + 1

        data = []
        current = index
        collected = 0

        # Collect up to page_size items, skipping missing indices
        while collected < page_size and current <= max(indexed_data.keys()):
            if current in indexed_data:
                data.append(indexed_data[current])
                collected += 1
            current += 1

        # Find the next index to query (first index after the last item returned)
        next_index = current

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index
        }
