#!/usr/bin/env python3
"""A type-annotated function that returns
    a tuple with a string and a squared number"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with a string and the square of the number"""
    return (k, float(v ** 2))
