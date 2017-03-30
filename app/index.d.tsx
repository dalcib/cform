declare module 'empty-schema' {
  const empty: (schema: JSON.Schema) => any
  export default empty
}

/*type TextInputOnChange = {event: {
    nativeEvent: {
        text: string;
        contentSize: {
            width: number;
            height: number;
        };
        target: number;
        eventCount: number;
    }
}}

interface NativeSyntheticEvent<T> {
    bubbles: boolean
    cancelable: boolean
    currentTarget: EventTarget & T
    defaultPrevented: boolean
    eventPhase: number
    isTrusted: boolean
    nativeEvent: T
    preventDefault(): void
    stopPropagation(): void
    target: EventTarget
    timeStamp: Date
    type: string
}*/
