export function getSingleDataPlaceholder(payload: any) {
  const data = {
    message: `Get Single Data Success`,
    success: true,
    data: null
  };
  if (payload.length > 0) {
    data.data = payload[0];
  }
  return data;
}

export function insertDataPlaceholder(payload: any) {
  const data = {
    message: `Insert Data Success`,
    success: true,
    data: payload
  };

  return data;
}

export function updateDataPlaceholder(payload: any) {
  const data = {
    message: `Update Data Success`,
    success: true,
    data: payload
  };

  return data;
}

export function deleteDataPlaceholder(payload: any) {
  const data = {
    message: `Delete Data Success`,
    success: true,
    data: payload
  };

  return data;
}
