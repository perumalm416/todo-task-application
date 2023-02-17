const defaultTaskListState = {
  taskItems: [],
  fetchLoadingStatus: false,
  fetchError: false,
};

export const TaskListReducer = (state = defaultTaskListState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        taskItems: action.payload,
        fetchError: false,
        fetchLoadingStatus: state.fetchLoadingStatus,
      };
    }
    case "FETCH_START": {
      return {
        taskItems: state.taskItems,
        fetchError: state.fetchError,
        fetchLoadingStatus: true,
      };
    }
    case "FETCH_END": {
      return {
        taskItems: state.taskItems,
        fetchError: state.fetchError,
        fetchLoadingStatus: false,
      };
    }
    case "FETCH_FAILURE": {
      return {
        taskItems: state.taskItems,
        fetchError: true,
        fetchLoadingStatus: state.fetchLoadingStatus,
      };
    }
    default: {
      return defaultTaskListState;
    }
  }
};
