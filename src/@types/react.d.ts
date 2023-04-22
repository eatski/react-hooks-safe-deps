declare module 'react' {
  // OriginalReactモジュールからすべての関数や型定義を再エクスポート

  const markerSymbol: unique symbol;
  type Memorized = {
    __react_hooks_safe_deps_memorized_marker: typeof markerSymbol;
  }

  type ConvertToMemorized<T> = T extends (Object | Function) ? Memorized & T : T

  type SafeDep = Memorized | string | undefined | null | boolean | number | Symbol;

  // useMemoをオーバーライド
  const useMemo: <T>(factory: () => T, deps: SafeDep[] | undefined) => ConvertToMemorized<T>;
}
