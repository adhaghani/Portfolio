import React, { useState } from "react";

import "Navigation.css";

const Navigation = () => {
  const [Sidebar, setSidebar] = useState(false);

  return (
    <div className="Navigation" id="Navigation">
      Navigation
    </div>
  );
};

export default Navigation;
