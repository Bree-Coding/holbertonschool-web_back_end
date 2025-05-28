#!/usr/bin/env python3
"""Module containing an asynchronous comprehension function"""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collects 10 random floating-point numbers from the async_generator.

    Returns:
        List[float]: A list of 10 random numbers generated asynchronously.
    """
    return [x async for x in async_generator()]
