'use client'

import {
    Analytics as RemcoAnalytics,
    type EventMeta,
    type EventName,
    type EventPayload
} from '@remcostoeten/analytics'
import * as RemcoSdk from '@remcostoeten/analytics'

type TrackFunc = (
    name: EventName,
    payload?: EventPayload,
    meta?: EventMeta
) => void

function getTrack(): TrackFunc | null {
    if ('track' in RemcoSdk && typeof RemcoSdk.track === 'function') {
        return RemcoSdk.track as TrackFunc
    }

    return null
}

export function trackEvent(name: EventName, payload?: EventPayload, meta?: EventMeta) {
    const track = getTrack()

    if (track) {
        track(name, payload, meta)
    }
}

export function Analytics() {
    return (
        <RemcoAnalytics
            projectId="resume-20226"
            ingestUrl="https://ingestion.remcostoeten.nl"
        />
    )
}
