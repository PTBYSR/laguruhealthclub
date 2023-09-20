import React from "react";

const Trainer = ({fill = "#2B3990", w="24",h="30"}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 0.242188C9.34907 0.242188 7.20006 2.39122 7.20006 5.04221C7.20006 7.69313 9.34907 9.84221 12.0001 9.84221C14.6511 9.84221 16.8001 7.69313 16.8001 5.04221C16.8001 2.39122 14.6511 0.242188 12.0001 0.242188ZM9.63758 12.2422L11.9907 18.3758L14.2829 12.2422H12.0001H9.63758ZM15.5368 12.3172L12.7665 19.7375C13.0257 19.9571 13.2001 20.275 13.2001 20.6422V21.8422C13.2001 22.5046 12.6625 23.0422 12.0001 23.0422C11.3377 23.0422 10.8001 22.5046 10.8001 21.8422V20.6422C10.8001 20.2762 10.9733 19.9607 11.2313 19.7399L8.38598 12.3289C7.03838 12.5497 5.7931 13.2176 4.87269 14.2508L0.539117 19.1164C-0.0440771 19.7692 -0.165056 20.6954 0.229744 21.4742L3.72897 28.3836C3.94017 28.8012 4.3644 29.0422 4.8024 29.0422C4.9836 29.0422 5.16745 29.0009 5.34145 28.9133C5.91625 28.6217 6.14804 27.932 5.88524 27.35L5.88992 27.3477L3.47817 20.9891L6.7243 18.8539C6.9775 21.4603 7.20006 24.9154 7.20006 29.0422H16.8001C16.8001 24.9154 17.0226 21.4603 17.2758 18.8539L20.522 20.9891L18.1102 27.3477H18.1149C17.8509 27.9297 18.0827 28.6194 18.6587 28.911C18.8339 28.9986 19.0165 29.0399 19.1977 29.0399C19.6357 29.0399 20.0588 28.8012 20.2712 28.3836L23.7704 21.4766C24.1664 20.6966 24.0453 19.7704 23.4633 19.1188L19.1298 14.2508C18.1914 13.1984 16.9144 12.5236 15.5368 12.3172Z"
        fill={fill}      />
    </svg>
  );
};

export default Trainer;
