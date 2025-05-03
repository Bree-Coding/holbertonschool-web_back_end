#!/usr/bin/env python3
"""Update topics of a document based on name"""


def update_topics(mongo_collection, name, topics):
    """Update topics of a document based on name"""
    mongo_collection.update_many({ "name": name }, { "$set": { "topics": topics } })
