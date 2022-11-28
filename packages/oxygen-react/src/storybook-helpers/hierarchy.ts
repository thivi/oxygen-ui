/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

enum StorybookCategories {
  Buttons = 'Buttons',
  DataDisplay = 'Data Display',
  Feedback = 'Feedback',
  Hooks = 'Hooks',
  Inputs = 'Inputs',
  Introduction = 'Introduction',
  Layout = 'Layout',
  Miscellaneous = 'Miscellaneous',
  Navigation = 'Navigation',
  Overlays = 'Overlays',
  Patterns = 'Patterns',
  Primitives = 'Primitives',
  Typography = 'Typography',
}

export const STORYBOOK_HIERARCHY: Record<string, string> = {
  BUTTON: `${StorybookCategories.Buttons}/Button`,
  LINK: `${StorybookCategories.Navigation}/Link`,
  SIGN_IN: `${StorybookCategories.Patterns}/SignIn`,
  TEXT_FIELD: `${StorybookCategories.Inputs}/TextField`,
  WELCOME: `${StorybookCategories.Introduction}/Welcome`,
};
