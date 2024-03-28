import React from "react";

/* 
binary: https://www.freesoft.org/CIE/Topics/19.htm
bitwise_AND: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
(0 là false/off, 1 là true/on)
0001 - FFFT
0010 - FFTF
0100 - FTFF
1000 - TFFF

Ex: access_level = 7 (READ | CREATE | UPDATE) -> 00 00 01 11
CAN_READ
00 00 00 01
    &
00 00 01 11
------------
00 00 00 01 (== 1, CAN_READ)

CAN_CREATE
00 00 00 10
    &
00 00 01 11
------------
00 00 00 10 (== 2, CAN_CREATE)
*/

const CAN_READ = 1; // 00 00 00 01
const CAN_CREATE = 2; // 00 00 00 10
const CAN_UPDATE = 4; // 00 00 01 00
const CAN_DELETE = 8; // 00 00 10 00

export const roleUser: any = {
  SUPER_ADMIN: CAN_CREATE | CAN_READ | CAN_UPDATE | CAN_DELETE,
  STUDIO_ADMIN: CAN_CREATE | CAN_READ | CAN_UPDATE | CAN_DELETE,
  STUDIO_MANAGER: CAN_CREATE | CAN_READ | CAN_UPDATE | CAN_DELETE,
  STUDIO_OWNER: CAN_CREATE | CAN_READ | CAN_UPDATE | CAN_DELETE,
  STUDIO_VIEWER: CAN_READ,
  STUDIO_MEMBER: CAN_READ,

  PRODUCT_OWNER: CAN_CREATE | CAN_READ | CAN_UPDATE | CAN_DELETE,
  PRODUCT_EDITOR: CAN_READ | CAN_UPDATE,
  PRODUCT_VIEWER: CAN_READ,
};

const permissions = {
  "/studios": CAN_UPDATE,
  "/studios/show/general": CAN_READ,
  "/studios/show/product_info": CAN_CREATE,
  "/studios/show/user": CAN_UPDATE | CAN_DELETE,
};

type IProps = {
  resource: keyof typeof permissions;
  // access_level: number;
  children: React.ReactNode;
  // children: (hasPermission: boolean) => React.ReactNode;
};

function AccessControl({ resource, children }: IProps) {
  const userStudioRole = 'SUPER_ADMIN';
  if (!(permissions[resource] & roleUser[userStudioRole])) {
    return null;
  }
  // if ((permissions[resource] & access_level) === access_level) {
  //   return null;
  // }

  return <>{children}</>;
  // return <>{children(!!(permissions[resource] & access_level))}</>;
}

export default AccessControl;
