/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable class-methods-use-this */

class Utils {
  pruneEmptyValues(obj) {
    const keys = Object.keys(obj);
    let i = 0;
    keys.forEach((k) => {
      if (!obj[k] || (Array.isArray(obj[k]) && obj[k].length === 0)) {
        // eslint-disable-next-line no-param-reassign
        delete obj[k];
        i += 1;
      }
    });
    return keys.length === i ? null : obj;
  }
}

module.exports = new Utils();
