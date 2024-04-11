
import { useFeatureToggle } from "./FeatureToggleProvider";

export const useMenu = (
  defaultValue: string,
  onChange: (markdown: string) => void
) => {
  const pluginViewFactory = usePluginViewFactory();
  const nodeViewFactory = useNodeViewFactory();
  const widgetViewFactory = useWidgetViewFactory();
  const setProseState = useSetProseState();
  const setShare = useSetShare();
  const setInspector = useSetInspector();
  const toast = useToast();
  const {
    enableGFM,
    enableMath,
    enableDiagram,
    enableBlockHandle,
    enableTwemoji,
  } = useFeatureToggle();
