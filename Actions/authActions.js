export const GOOGLE_AUTH_START = 'GOOGLE_AUTH_REQUEST';
export const GOOGLE_AUTH_SUCCESS = 'GOOGLE_AUTH_SUCCESS';
export const GOOGLE_AUTH_FAILURE = 'GOOGLE_AUTH_FAILURE';

export const FB_AUTH_START = 'FB_AUTH_REQUEST';
export const FB_AUTH_SUCCESS = 'FB_AUTH_SUCCESS';
export const FB_AUTH_FAILURE = 'FB_AUTH_FAILURE';

export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

export const FBAuthStart = (isLoggingIn) => ({
    type: FB_AUTH_START,
    isLoggingIn,
});

export const FBAuthSuccess = (
    isLoggingIn,
    userInfo,
    authToken,
    resourceToken
) => ({
    type: FB_AUTH_SUCCESS,
    isLoggingIn,
    userInfo,
    authToken,
    resourceToken,
});

export const FBAuthFailure = (isLoggingIn, fbAuthError) => ({
    type: FB_AUTH_FAILURE,
    isLoggingIn,
    fbAuthError,
});

export const signOutStart = (userInfo) => ({
    type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS,
});
