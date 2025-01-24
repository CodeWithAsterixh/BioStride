const roleMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const userRole = state.auth.user?.role;

  if (action.type === 'roles/protectedAction' && !['admin', 'sub-admin'].includes(userRole)) {
    console.error('Unauthorized action for the current role.');
    return;
  }

  return next(action);
};

export default roleMiddleware;
