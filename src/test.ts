import { useMemo } from "react";

export function test() {
    const nonMemorizedObject = {};
    const nonMemorizedFunctuon = () => {};
    const nonMemorizedArray = [];
    const memorized = useMemo(() => nonMemorizedObject, ["a",1,false]);
    // @ts-expect-error
    useMemo(() => nonMemorizedObject, [nonMemorizedObject]);
    // @ts-expect-error
    useMemo(() => nonMemorizedFunctuon, [nonMemorizedFunctuon]);
    // @ts-expect-error
    useMemo(() => nonMemorizedArray, [nonMemorizedArray]);
    useMemo(() => nonMemorizedObject, [memorized]);
    // @ts-expect-error
    const hoge: import("react").SafeDep = "a";
    import("react").useEffect(() => {},[]);
}