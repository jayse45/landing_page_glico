import React from "react";

const sizeClasses = {
  txtMontserratMedium20: "font-medium font-montserrat",
  txtMontserratRegular15Indigo800: "font-montserrat font-normal",
  txtMontserratSemiBold18WhiteA700: "font-montserrat font-semibold",
  txtMontserratRegular15Bluegray90001: "font-montserrat font-normal",
  txtMontserratRegular15DeeppurpleA700: "font-montserrat font-normal",
  txtMontserratSemiBold15WhiteA700: "font-montserrat font-semibold",
  txtMontserratMedium12Bluegray10001: "font-medium font-montserrat",
  txtMontserratBold32: "font-bold font-montserrat",
  txtMontserratSemiBold18: "font-montserrat font-semibold",
  txtMontserratSemiBold24Black900: "font-montserrat font-semibold",
  txtMontserratSemiBold15: "font-montserrat font-semibold",
  txtMontserratSemiBold12: "font-montserrat font-semibold",
  txtMontserratSemiBold32: "font-montserrat font-semibold",
  txtMontserratRegular15WhiteA700: "font-montserrat font-normal",
  txtMontserratMedium15WhiteA700: "font-medium font-montserrat",
  txtMontserratMedium12Bluegray100: "font-medium font-montserrat",
  txtMontserratRegular15: "font-montserrat font-normal",
  txtMontserratRegular12: "font-montserrat font-normal",
  txtMontserratMedium12: "font-medium font-montserrat",
  txtMontserratBold44: "font-bold font-montserrat",
  txtMontserratRegular12Gray600: "font-montserrat font-normal",
  txtMontserratBold20: "font-bold font-montserrat",
  txtMontserratMedium15: "font-medium font-montserrat",
  txtMontserratRegular15Gray700: "font-montserrat font-normal",
  txtMontserratRegular15Gray800: "font-montserrat font-normal",
  txtMontserratSemiBold15Bluegray90001: "font-montserrat font-semibold",
  txtMontserratSemiBold24: "font-montserrat font-semibold",
  txtMontserratSemiBold22: "font-montserrat font-semibold",
  txtMontserratSemiBold15Indigo800: "font-montserrat font-semibold",
  txtMontserratBold20WhiteA700: "font-bold font-montserrat",
  txtMontserratMedium15Gray700: "font-medium font-montserrat",
  txtMontserratBold32WhiteA700: "font-bold font-montserrat",
  txtMontserratMedium15Indigo800: "font-medium font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
