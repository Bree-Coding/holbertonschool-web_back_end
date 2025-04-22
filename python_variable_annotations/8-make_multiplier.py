#!/usr/bin/env python3
"""A type-annotated function that multiplies a float by a multiplier"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return multiplication of a float by multiplier"""
    return lambda x: x * multiplier
