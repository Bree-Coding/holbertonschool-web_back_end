#!/usr/bin/env python3
"""A type-annotated function that returns
    a list of tuples with element and its length"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples with each element and its length"""
    return [(i, len(i)) for i in lst]
