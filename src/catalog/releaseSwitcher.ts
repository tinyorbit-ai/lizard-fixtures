export interface ProductRelease {
  id: string;
  releasedAt: string;
  current: boolean;
}

export interface ReleaseSwitcherState {
  releases: ProductRelease[];
  initialVisibleIndex: number;
}

export function openReleaseSwitcher(
  releases: ProductRelease[],
): ReleaseSwitcherState {
  return {
    releases: [...releases].sort((left, right) =>
      left.releasedAt.localeCompare(right.releasedAt),
    ),
    initialVisibleIndex: 0,
  };
}
