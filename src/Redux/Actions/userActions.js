export const updateProfile = (updatedUser) => {
    return {
      type: "UPDATE_PROFILE",
      payload: updatedUser,
    };
  };