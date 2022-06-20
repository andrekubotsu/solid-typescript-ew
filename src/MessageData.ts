// we create an abstraction, a contract
export default interface MessageData {
    read(language: string): Promise<string>
}
