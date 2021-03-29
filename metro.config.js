/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
<<<<<<< HEAD
        inlineRequires: true,
=======
        inlineRequires: false,
>>>>>>> 7c3e0acc9d3233c60610cae246e7f660edf38415
      },
    }),
  },
};
