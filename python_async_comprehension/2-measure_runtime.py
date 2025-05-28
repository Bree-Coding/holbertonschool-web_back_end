#!/usr/bin/env python3
"""Measures the total runtime of running
async_comprehension four times in parallel."""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Executes async_comprehension 4 times concurrently
    and returns the total runtime in seconds."""
    start = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.time()
    return end - start
