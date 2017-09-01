---
title: tuple vs object
setup: |
  function tuple({ data, error, loading }) {
    if (loading !== undefined)
      return ["loading", { data, loading }];
  
    if (error !== undefined)
      return ["error", { data, error }];
  
    return data === undefined ? ["empty", {}] : ["data", { data }];
  }
  
  function object({ data, error, loading }) {
    if (loading !== undefined)
      return { state: "loading", props: { data, loading } };
  
    if (error !== undefined)
      return { state: "error", props: { data, loading } };
  
    return data === undefined ? { state: "empty", props: {} } : { state: "data", props: { data } };
  }
  
  const props = {
    data: "Test",
    error: undefined,
    loading: undefined,
  };
tests:
  -
    name: tuple
    code: |
      tuple(props);
  -
    name: object
    code: |
      object(props);
---
Tuple vs object
