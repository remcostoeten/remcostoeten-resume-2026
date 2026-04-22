'use client'

import * as RemcoSdk from '@remcostoeten/analytics'

type EventMeta = RemcoSdk.EventMeta

type EventName = RemcoSdk.EventName

type EventPayload = RemcoSdk.EventPayload

type TrackFunc = (
    name: EventName,
    payload?: EventPayload,
    meta?: EventMeta
) => void

let trackRef: TrackFunc | null | undefined

function getTrack(): TrackFunc | null {
    if (trackRef !== undefined) {
        return trackRef
    }

    if ('track' in RemcoSdk && typeof RemcoSdk.track === 'function') {
        trackRef = RemcoSdk.track as TrackFunc
        return trackRef
    }

    trackRef = null
    return null
}

export function trackEvent(name: EventName, payload?: EventPayload, meta?: EventMeta) {
    const track = getTrack()

    if (!track) {
        return
    }

    try {
        track(name, payload, meta)
    } catch (error) {
        console.error('analytics_track_error', error)
    }
}

export function Analytics() {
    const projectId = process.env.NEXT_PUBLIC_ANALYTICS_PROJECT_ID ?? 'resume-2026'
    const ingestUrl =
        process.env.NEXT_PUBLIC_ANALYTICS_INGEST_URL ??
        'https://ingestion.remcostoeten.nl'

    return <RemcoSdk.Analytics projectId={projectId} ingestUrl={ingestUrl} />
}
