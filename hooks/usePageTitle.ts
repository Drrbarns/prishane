'use client';

import { useEffect } from 'react';
import { useCMS } from '@/context/CMSContext';

export function usePageTitle(title: string) {
  const { getSetting } = useCMS();
  const siteName = getSetting('site_name') || 'Prishane Hair';

  useEffect(() => {
    document.title = title ? `${title} | ${siteName}` : siteName;
  }, [title, siteName]);
}
