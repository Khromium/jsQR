import { Dict } from "awesome-typescript-loader/dist/instance";
export interface Chunk {
    type: Mode;
    text: string;
}
export interface ByteChunk {
    type: Mode.Byte | Mode.Kanji;
    bytes: number[];
}
export interface ECIChunk {
    type: Mode.ECI;
    assignmentNumber: number;
}
export declare type Chunks = Array<Chunk | ByteChunk | ECIChunk>;
export interface DecodedQR {
    text: string;
    bytes: number[];
    chunks: Chunks;
    version: number;
    mask: number;
    errorLevel: number;
}
export declare enum Mode {
    Numeric = "numeric",
    Alphanumeric = "alphanumeric",
    Byte = "byte",
    Kanji = "kanji",
    ECI = "eci"
}
export declare function decode(data: Uint8ClampedArray, version: number, formatinfo: Dict<number>): DecodedQR;
