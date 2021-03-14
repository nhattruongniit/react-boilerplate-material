PERMISSION

Permission: create, update, delete, view, upload

Access folder: CUDVL

00011111
CUDVL

p0: 00000000 = no permission
p1: 00000001 = canUplgoad
p2: 00000010 = canView
p3: 00000011 = canViewCanUpload
p4: 00000100 = canDelete
p5: 00000101 = canDeleteCanUpload
p6: 00000110 = canDeleteCanView
p7: 00000111 = canDeleteCanViewCanUpload
p8: 00001000 = canUpdate
p9: 00001001 = canUpdateCanUpload
p10: 00001010 = canUpdateCanView
p11: 00001011 = canUpdateCanViewCanUpload
p12: 00001100 = canUpdateCanDelete
p13: 00001101 = canUpdateCanDeleteCanUpload
p14: 00001110 = canUpdateCanDeleteCanView
p15: 00001111 = canUpdateCanDeleteCanViewCanUpload
p16: 00010000 = canCreate
p17: 00010001 = canCreateCanUpload
p18: 00010010 = canCreateCanView
p19: 00010011 = canCreateCanViewCanUpload
p20: 00010100 = canCreateCanDelete
p21: 00010101 = canCreateCanDeleteCanUpload
p22: 00010110 = canCreateCanDeleteCanView
p23: 00010111 = canCreateCanDeleteCanViewCanUpload
p24: 00011000 = canCreateCanUpdate
p25: 00011001 = canCreateCanUpdateCanUpload
p26: 00011010 = canCreateCanUpdateCanView
p27: 00011011 = canCreateCanUpdateCanViewCanUpload
p28: 00011100 = canCreateCanUpdateCanDelete
p29: 00011101 = canCreateCanUpdateCanDeleteCanUpload
p30: 00011110 = canCreateCanUpdateCanDeleteCanView
p31: 00011111 = full permission

===
1: upload
2: view
4: delete
8: update
16: create

=== check permission ===
myPermision = 20
(31 & 2) === 2

========
Define rule:

SystemAdmin: {
permissions: {
'app.currentContents.changeStatusProductToReview': 31,
'app.currentContents.changeStatusReviewToProduction': 31
}
},

User: {
permissions: {
'app.currentContents.changeStatusProductToReview': 1,
'app.currentContents.changeStatusReviewToProduction': 1
}
}

// Phia FE:
enum PermissionPrivilege {
Upload = 1
View = 2
Delete = 4,
Update = 8,
Create = 16,
}

enum PermissionNames {
AppCurrentContentsChangeStatusProductToPreview = 'app.currentContents.changeStatusProductToReview';
}

checkPermission(permissionName, userPermission) && <button onClick={changeStatusToReview}></button>

checkPermission(name, userPermission) {
return (userPermission[name] & PermissionPrivilege.Update) === PermissionPrivilege.Update;
}

PermissionNames.AppCurrentContentsChangeStatusProductToPreview

// link: https://levelup.gitconnected.com/role-based-authentication-with-react-router-and-typescript-b707af568ccf
