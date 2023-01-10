class cache {
  private static cacheList: Set<string> = new Set();

  public static add(filename: string, width: string, height: string): void {
    cache.cacheList.add(`${filename}-${width}-${height}`);
  }

  public static exists(
    filename: string,
    width: string,
    height: string
  ): boolean {
    return cache.cacheList.has(`${filename}-${width}-${height}`);
  }
}

export default cache;
