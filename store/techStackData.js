export const state = () => ({
  techStack: [
    {
      techName: 'HTML',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\n' +
        '<path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>\n' +
        '</svg>',
      techProgress: 80
    },
    {
      techName: 'CSS',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\n' +
        '<path fill="currentColor" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>\n' +
        '</svg>',
      techProgress: 80
    },
    {
      techName: 'SASS',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\n' +
        '<path fill="currentColor" d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"></path>\n' +
        '</svg>',
      techProgress: 80
    },
    {
      techName: 'Javascript',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n' +
        '<path fill="currentColor" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>\n' +
        '</svg>',
      techProgress: 80
    },
    {
      techName: 'jQuery',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">\n' +
        '<path fill="currentColor" d="M 29.867188 3.007813 C 29.761719 3.023438 29.65625 3.054688 29.554688 3.101563 C 28.695313 3.527344 27.71875 4.792969 27.53125 5.042969 C 27.519531 5.058594 27.507813 5.074219 27.5 5.089844 C 26.535156 6.535156 26.019531 8.226563 26 9.988281 C 25.988281 11.308594 26.246094 12.617188 26.769531 13.878906 C 27.988281 16.804688 30.519531 19.226563 33.53125 20.359375 C 33.632813 20.394531 33.730469 20.429688 33.90625 20.492188 C 33.921875 20.5 34.070313 20.546875 34.09375 20.550781 L 34.203125 20.589844 C 34.359375 20.640625 34.519531 20.691406 34.675781 20.722656 C 35.46875 20.882813 36.242188 20.972656 36.96875 20.996094 C 37.09375 20.996094 37.21875 21 37.34375 21 C 42.824219 21 44.949219 17.132813 45.65625 15.84375 C 45.726563 15.71875 45.777344 15.617188 45.824219 15.554688 C 45.824219 15.550781 45.824219 15.550781 45.828125 15.546875 C 46.136719 15.089844 46.019531 14.46875 45.5625 14.15625 C 45.109375 13.847656 44.488281 13.964844 44.175781 14.421875 C 44.175781 14.421875 44.171875 14.421875 44.171875 14.421875 C 42.710938 16.574219 40.210938 17.226563 36.746094 16.367188 C 36.488281 16.304688 36.207031 16.207031 35.957031 16.113281 C 35.628906 15.996094 35.300781 15.859375 34.996094 15.710938 C 34.390625 15.410156 33.820313 15.050781 33.304688 14.652344 C 30.257813 12.289063 29.066406 7.371094 30.847656 4.53125 C 31.085938 4.152344 31.042969 3.660156 30.742188 3.328125 C 30.515625 3.078125 30.1875 2.964844 29.867188 3.007813 Z M 21.007813 5 C 20.78125 4.996094 20.550781 5.070313 20.363281 5.226563 C 18.851563 6.457031 17.304688 8.472656 17.238281 8.554688 C 17.230469 8.570313 17.222656 8.582031 17.210938 8.597656 C 14.476563 12.578125 14.269531 18.242188 16.6875 23.027344 C 17.066406 23.785156 17.496094 24.507813 17.953125 25.171875 L 18.089844 25.367188 C 18.476563 25.933594 18.910156 26.574219 19.464844 27.074219 C 19.65625 27.292969 19.863281 27.503906 20.066406 27.707031 L 20.164063 27.808594 L 20.246094 27.890625 C 20.453125 28.089844 20.664063 28.292969 20.882813 28.488281 C 20.882813 28.488281 20.886719 28.488281 20.886719 28.488281 C 20.902344 28.511719 20.925781 28.527344 20.945313 28.546875 C 21.191406 28.765625 21.441406 28.972656 21.773438 29.234375 L 21.863281 29.300781 C 22.121094 29.507813 22.382813 29.703125 22.652344 29.894531 C 22.679688 29.914063 22.707031 29.933594 22.734375 29.953125 C 22.828125 30.015625 22.921875 30.074219 23.015625 30.140625 L 23.109375 30.203125 L 23.21875 30.273438 C 23.417969 30.40625 23.613281 30.527344 23.890625 30.6875 C 24.070313 30.796875 24.261719 30.90625 24.386719 30.96875 C 24.441406 31 24.5 31.03125 24.636719 31.105469 L 24.941406 31.265625 C 24.957031 31.273438 25.027344 31.304688 25.042969 31.3125 C 25.242188 31.414063 25.449219 31.511719 25.65625 31.605469 L 25.972656 31.746094 C 26.179688 31.835938 26.390625 31.921875 26.648438 32.019531 L 26.765625 32.0625 C 26.773438 32.070313 26.871094 32.105469 26.878906 32.109375 C 27.066406 32.175781 27.257813 32.242188 27.449219 32.304688 L 27.886719 32.449219 C 28.105469 32.523438 28.359375 32.609375 28.636719 32.65625 C 30 32.882813 31.324219 33 32.578125 33 C 32.726563 33 32.875 32.996094 33.019531 32.996094 C 44.058594 32.753906 46.929688 23.375 46.957031 23.28125 C 47.09375 22.808594 46.871094 22.304688 46.425781 22.09375 C 45.980469 21.882813 45.449219 22.03125 45.171875 22.4375 C 42.375 26.523438 37.085938 28.25 31.699219 26.828125 C 31.449219 26.765625 31.207031 26.695313 30.90625 26.597656 C 30.855469 26.582031 30.8125 26.566406 30.730469 26.535156 C 30.554688 26.480469 30.382813 26.421875 30.1875 26.347656 L 29.910156 26.242188 C 29.75 26.179688 29.589844 26.117188 29.394531 26.03125 L 29.265625 25.972656 C 29.027344 25.871094 28.796875 25.757813 28.589844 25.65625 L 28.019531 25.359375 C 27.890625 25.296875 27.777344 25.226563 27.601563 25.121094 L 27.503906 25.066406 L 27.40625 25.007813 C 27.261719 24.921875 27.117188 24.832031 26.984375 24.738281 L 26.890625 24.679688 C 26.882813 24.675781 26.804688 24.621094 26.796875 24.613281 C 26.679688 24.539063 26.566406 24.464844 26.457031 24.394531 C 26.214844 24.222656 25.976563 24.042969 25.699219 23.824219 L 25.589844 23.734375 C 23.011719 21.675781 21.105469 18.925781 20.210938 15.976563 C 19.378906 13.269531 19.996094 9.726563 21.863281 6.5 C 22.105469 6.082031 22.015625 5.550781 21.644531 5.238281 C 21.460938 5.082031 21.234375 5 21.007813 5 Z M 10.003906 8 C 9.765625 8 9.523438 8.085938 9.332031 8.257813 C 7.421875 9.972656 5.992188 12.195313 5.835938 12.449219 C 1.75 18.398438 2.539063 27.644531 5.34375 33.296875 C 5.398438 33.414063 5.457031 33.527344 5.515625 33.640625 L 5.554688 33.703125 C 5.605469 33.816406 5.664063 33.933594 5.683594 33.957031 C 5.714844 34.03125 5.761719 34.113281 5.78125 34.136719 C 5.828125 34.234375 5.875 34.320313 5.960938 34.46875 L 6.28125 35.019531 C 6.328125 35.09375 6.375 35.171875 6.390625 35.199219 C 6.453125 35.300781 6.519531 35.40625 6.585938 35.511719 L 6.742188 35.761719 C 6.789063 35.835938 6.835938 35.902344 6.867188 35.941406 C 7.023438 36.183594 7.179688 36.425781 7.351563 36.65625 C 7.359375 36.667969 7.367188 36.675781 7.375 36.683594 L 7.4375 36.769531 C 7.578125 36.972656 7.722656 37.167969 7.851563 37.328125 L 8.421875 38.050781 C 8.429688 38.058594 8.492188 38.132813 8.496094 38.140625 L 8.578125 38.234375 C 8.75 38.445313 8.933594 38.65625 9.117188 38.859375 C 9.144531 38.890625 9.171875 38.917969 9.199219 38.949219 C 9.375 39.140625 9.554688 39.332031 9.742188 39.53125 L 9.921875 39.703125 C 10.070313 39.859375 10.21875 40.011719 10.375 40.15625 C 10.375 40.160156 10.449219 40.230469 10.449219 40.230469 L 10.605469 40.375 C 10.792969 40.554688 10.988281 40.734375 11.136719 40.859375 C 11.144531 40.871094 11.285156 40.992188 11.296875 41 C 11.480469 41.164063 11.664063 41.320313 11.851563 41.472656 L 12.808594 42.230469 C 12.96875 42.347656 13.132813 42.464844 13.320313 42.601563 C 13.382813 42.648438 13.449219 42.695313 13.515625 42.738281 C 13.542969 42.761719 13.574219 42.785156 13.59375 42.796875 L 14.3125 43.277344 C 14.574219 43.449219 14.835938 43.609375 15.15625 43.800781 L 15.328125 43.898438 C 15.527344 44.015625 15.730469 44.132813 15.921875 44.234375 C 16.035156 44.296875 16.148438 44.351563 16.246094 44.402344 C 16.382813 44.476563 16.53125 44.558594 16.757813 44.667969 C 16.777344 44.679688 16.9375 44.757813 16.957031 44.765625 C 17.183594 44.878906 17.414063 44.984375 17.703125 45.113281 C 17.703125 45.117188 17.796875 45.160156 17.796875 45.160156 C 18.0625 45.273438 18.320313 45.382813 18.660156 45.519531 C 18.714844 45.542969 18.769531 45.5625 18.78125 45.566406 C 19.023438 45.660156 19.277344 45.753906 19.484375 45.828125 C 19.503906 45.835938 19.609375 45.878906 19.628906 45.886719 C 19.90625 45.980469 20.179688 46.070313 20.53125 46.179688 C 20.589844 46.199219 20.652344 46.21875 20.660156 46.21875 L 20.859375 46.28125 C 21.101563 46.355469 21.34375 46.433594 21.605469 46.484375 C 23.464844 46.824219 25.28125 47 27 47 L 27.003906 47 C 41.328125 47 45.890625 35.472656 45.9375 35.355469 C 46.113281 34.890625 45.921875 34.367188 45.484375 34.125 C 45.054688 33.886719 44.507813 34 44.203125 34.394531 C 40.527344 39.234375 33.59375 41.03125 25.65625 39.207031 C 25.464844 39.160156 25.269531 39.105469 25.078125 39.046875 L 24.703125 38.933594 C 24.449219 38.855469 24.195313 38.769531 23.949219 38.683594 C 23.945313 38.683594 23.832031 38.640625 23.832031 38.640625 C 23.613281 38.566406 23.394531 38.480469 23.203125 38.40625 L 22.984375 38.320313 C 22.742188 38.222656 22.5 38.121094 22.265625 38.015625 L 22.128906 37.957031 C 21.917969 37.859375 21.714844 37.765625 21.511719 37.664063 C 21.496094 37.65625 21.335938 37.578125 21.320313 37.574219 C 21.179688 37.503906 21.039063 37.429688 20.859375 37.332031 L 20.042969 36.894531 C 19.960938 36.839844 19.875 36.789063 19.792969 36.746094 C 19.546875 36.59375 19.292969 36.441406 19.042969 36.28125 C 18.984375 36.246094 18.933594 36.207031 18.835938 36.140625 C 18.664063 36.03125 18.496094 35.917969 18.25 35.746094 L 18.152344 35.675781 C 17.984375 35.558594 17.820313 35.433594 17.683594 35.332031 C 17.597656 35.269531 17.511719 35.199219 17.371094 35.09375 C 17.246094 34.996094 17.121094 34.902344 17.003906 34.808594 L 16.785156 34.628906 C 16.601563 34.480469 16.429688 34.324219 16.25 34.171875 C 16.226563 34.148438 16.207031 34.132813 16.179688 34.113281 C 15.980469 33.929688 15.777344 33.746094 15.535156 33.515625 L 14.828125 32.8125 C 14.65625 32.636719 14.484375 32.457031 14.289063 32.242188 C 14.109375 32.042969 13.9375 31.84375 13.707031 31.570313 L 13.285156 31.054688 C 13.234375 30.980469 13.179688 30.90625 13.113281 30.828125 C 12.96875 30.632813 12.824219 30.441406 12.679688 30.238281 C 8.789063 24.878906 7.773438 13.691406 10.804688 9.59375 C 11.109375 9.183594 11.054688 8.605469 10.671875 8.257813 C 10.484375 8.085938 10.242188 8 10.003906 8 Z"/>\n' +
        '</svg>',
      techProgress: 80
    },
    {
      techName: 'VueJS',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n' +
        '<path fill="currentColor" d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path>\n' +
        '</svg>',
      techProgress: 50
    },
    {
      techName: 'NuxtJS',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 298">\n' +
        '<g fill-rule="nonzero" fill="none">\n' +
        '<path fill="currentColor" d="M227.92099 82.07407l-13.6889 23.7037-46.8148-81.08641L23.7037 273.58025h97.3037c0 13.0912 10.61252 23.7037 23.70371 23.7037H23.70371c-8.46771 0-16.29145-4.52017-20.5246-11.85382-4.23315-7.33366-4.23272-16.36849.00114-23.70174L146.89383 12.83951c4.23415-7.33433 12.0596-11.85252 20.5284-11.85252 8.46878 0 16.29423 4.51819 20.52839 11.85252l39.97037 69.23456z" />\n' +
        '<path fill="currentColor" d="M331.6642 261.7284l-90.05432-155.95062-13.6889-23.7037-13.68888 23.7037-90.04445 155.95061c-4.23385 7.33325-4.23428 16.36808-.00113 23.70174 4.23314 7.33365 12.05689 11.85382 20.5246 11.85382h166.4c8.46946 0 16.29644-4.51525 20.532-11.84955 4.23555-7.3343 4.23606-16.37123.00132-23.706h.01976zM144.7111 273.58024L227.921 129.48148l83.19012 144.09877h-166.4z" />\n' +
        '<path fill="currentColor" d="M396.04938 285.4321c-4.23344 7.33254-12.05656 11.85185-20.52345 11.85185H311.1111c13.0912 0 23.7037-10.6125 23.7037-23.7037h40.66173L260.09877 73.74815l-18.4889 32.02963-13.68888-23.7037L239.5753 61.8963c4.23416-7.33433 12.0596-11.85252 20.5284-11.85252 8.46879 0 16.29423 4.51819 20.52839 11.85252l115.41728 199.8321c4.23426 7.33395 4.23426 16.36975 0 23.7037z" />\n' +
        '</g>\n' +
        '</svg>\n',
      techProgress: 50
    },
    {
      techName: 'React',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n' +
        '<path fill="currentColor" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>\n' +
        '</svg>',
      techProgress: 30
    },
    {
      techName: 'Angular',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n' +
        '<path fill="currentColor" d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path>\n' +
        '</svg>',
      techProgress: 30
    },
    {
      techName: 'Typescript',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n' +
        '<path fill="currentColor" d="M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z" />\n' +
        '</svg>',
      techProgress: 50
    },
    {
      techName: 'Wordpress',
      techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n' +
        '<path fill="currentColor" d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 4.5625 C 22.3125 4.5625 27.4375 9.6875 27.4375 16 C 27.4375 22.3125 22.3125 27.4375 16 27.4375 C 9.6875 27.4375 4.5625 22.3125 4.5625 16 C 4.5625 9.6875 9.6875 4.5625 16 4.5625 Z M 16 5.71875 C 12.402344 5.71875 9.246094 7.546875 7.40625 10.34375 C 7.648438 10.351563 7.867188 10.34375 8.0625 10.34375 C 9.140625 10.34375 10.8125 10.21875 10.8125 10.21875 C 11.367188 10.1875 11.429688 10.996094 10.875 11.0625 C 10.875 11.0625 10.308594 11.15625 9.6875 11.1875 L 13.4375 22.3125 L 15.6875 15.5625 L 14.09375 11.1875 C 13.539063 11.15625 13 11.0625 13 11.0625 C 12.445313 11.03125 12.507813 10.1875 13.0625 10.21875 C 13.0625 10.21875 14.769531 10.34375 15.78125 10.34375 C 16.859375 10.34375 18.53125 10.21875 18.53125 10.21875 C 19.085938 10.1875 19.148438 10.996094 18.59375 11.0625 C 18.59375 11.0625 18.023438 11.15625 17.40625 11.1875 L 21.125 22.25 L 22.15625 18.8125 C 22.675781 17.476563 22.9375 16.351563 22.9375 15.46875 C 22.9375 14.195313 22.488281 13.339844 22.09375 12.65625 C 21.574219 11.808594 21.09375 11.066406 21.09375 10.21875 C 21.09375 9.273438 21.800781 8.40625 22.8125 8.40625 C 22.859375 8.40625 22.890625 8.40625 22.9375 8.40625 C 21.105469 6.726563 18.679688 5.71875 16 5.71875 Z M 25.03125 11.0625 C 25.078125 11.390625 25.09375 11.746094 25.09375 12.125 C 25.09375 13.167969 24.898438 14.34375 24.3125 15.8125 L 21.1875 24.90625 C 24.25 23.121094 26.28125 19.796875 26.28125 16 C 26.28125 14.210938 25.835938 12.527344 25.03125 11.0625 Z M 6.59375 11.8125 C 6.023438 13.089844 5.71875 14.507813 5.71875 16 C 5.71875 20.074219 8.066406 23.582031 11.5 25.25 Z M 16.1875 16.90625 L 13.09375 25.875 C 14.015625 26.144531 14.988281 26.28125 16 26.28125 C 17.199219 26.28125 18.335938 26.09375 19.40625 25.71875 C 19.378906 25.675781 19.363281 25.613281 19.34375 25.5625 Z"/>\n' +
        '</svg>\n',
      techProgress: 70
    }
  ]
})
