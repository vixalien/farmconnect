"use client";

import { Tabs as UITabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

export interface Tab {
  value: string;
  label: string;
}

export interface TabProps {
  base: string;
  defaultTab?: string;
  tabs: Tab[];
}

export function Tabs({
  base,
  defaultTab: configuredDefaultTab,
  tabs,
}: TabProps) {
  const pathname = usePathname();
  const router = useRouter();

  const defaultTab = useMemo(() => {
    return configuredDefaultTab ?? tabs[0].value;
  }, [configuredDefaultTab, tabs]);

  const currentTab = useMemo(() => {
    return pathname.slice(base.length + 1) || defaultTab;
  }, [pathname, base, defaultTab]);

  const onNavigate = useCallback(
    (tabName: string) => {
      router.push(base + "/" + tabName);
    },
    [router],
  );

  return (
    <UITabs value={currentTab} className="mb-8" onValueChange={onNavigate}>
      <TabsList>
        {tabs.map((tab) => {
          return (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </UITabs>
  );
}
