// https://translation.googleapi.com/language/translate/v2
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Convert({ language, text }) {
  useEffect(() => {
    console.log("translate");
  }, [language, text]);
  return <div></div>;
}
