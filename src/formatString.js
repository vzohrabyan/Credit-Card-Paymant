export const formatString = (e) => {
    const code = e.keyCode;
    const allowedKeys = [8];

    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }

    e.target.value = e.target.value
      .replace(/^([1-9]\/|[2-9])$/g, '0$1/')
      .replace(/^(0[1-9]|1[0-2])$/g, '$1/') 
      .replace(/^([0-1])([3-9])$/g, '0$1/$2') 
      .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2')
      .replace(/^([0]+)\/|[0]+$/g, '0')
      .replace(/[^\d\/]|^[\/]*$/g, '') 
      .replace(/\/\//g, '/'); 
  };