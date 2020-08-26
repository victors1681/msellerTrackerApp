import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {AppNavigator} from './src/navigation/AppNavigator';
import {AppearanceProvider} from 'react-native-appearance';
import {appMappings, appThemes} from './src/theme/app-theming';
import {Mapping, Theme, Theming} from './src/services/theme.service';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppStorage} from './src/services/app-storage.service';
import {
  AppLoading,
  LoadFontsTask,
  Task,
} from './src/components/loading/app-loading.component';
import {SplashImage} from './src/components/splash-image/splash-image.component';

const defaultConfig: {mapping: Mapping; theme: Theme} = {
  mapping: 'eva',
  theme: 'light',
};

const loadingTasks: Task[] = [
  // Should be used it when running Expo.
  // In Bare RN Project this is configured by react-native.config.js
  () =>
    LoadFontsTask({
      'opensans-regular': require('./src/assets/fonts/opensans-regular.ttf'),
      'roboto-regular': require('./src/assets/fonts/roboto-regular.ttf'),
    }),
  () =>
    AppStorage.getMapping(defaultConfig.mapping).then((result) => [
      'mapping',
      result,
    ]),
  () =>
    AppStorage.getTheme(defaultConfig.theme).then((result) => [
      'theme',
      result,
    ]),
];
const App = ({
  mapping,
  theme,
}: {
  mapping: Mapping;
  theme: Theme;
}): React.ReactFragment => {
  const [mappingContext, currentMapping] = Theming.useMapping(
    appMappings,
    mapping,
  );
  const [themeContext, currentTheme] = Theming.useTheming(
    appThemes,
    mapping,
    theme,
  );
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <AppearanceProvider>
        <ApplicationProvider {...currentMapping} theme={currentTheme}>
          <Theming.MappingContext.Provider value={mappingContext}>
            <Theming.ThemeContext.Provider value={themeContext}>
              <SafeAreaProvider>
                <AppNavigator />
              </SafeAreaProvider>
            </Theming.ThemeContext.Provider>
          </Theming.MappingContext.Provider>
        </ApplicationProvider>
      </AppearanceProvider>
    </React.Fragment>
  );
};

const Splash = ({loading}: {loading: boolean}): React.ReactElement => (
  <SplashImage
    loading={loading}
    source={require('./src/assets/images/image-splash.png')}
  />
);

export default (): React.ReactElement => (
  <AppLoading
    tasks={loadingTasks}
    initialConfig={defaultConfig}
    placeholder={Splash}>
    {(props) => <App {...props} />}
  </AppLoading>
);
