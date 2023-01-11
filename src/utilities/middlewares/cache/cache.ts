class Cache {
  private static cacheList: Set<string> = new Set();

  public static add(filename: string, width: string, height: string): void {
    Cache.cacheList.add(`${filename}-${width}-${height}`);
  }

  public static exists(
    filename: string,
    width: string,
    height: string
  ): boolean {
    return Cache.cacheList.has(`${filename}-${width}-${height}`);
  }
}

export default Cache;
