interface Alerts {
    sender_name: string,
    event: string,
    start: number,
    end: number,
    description: string,
    tags: Array<string>
}

export default Alerts;