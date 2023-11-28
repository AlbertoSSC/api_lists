import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Avatar, Divider, Link } from "@mui/material";

import { routes } from "@/core";

import { HeaderList, Member } from "@/pods";

interface Props {
  memberList: Member[];
  memberSliced: Member[];
  organization: string;
}

export const ListComponent: React.FC<Props> = (props) => {
  const { memberList, memberSliced, organization } = props;

  return (
    <>
      <span className="organization-list-name">
        {organization.toUpperCase()}
      </span>
      <span className="member-count">{memberList.length} miembros</span>
      <HeaderList />

      {memberSliced.map((member: Member) => (
        <React.Fragment key={member.id}>
          <Link
            sx={{
              borderRadius: "8px",
              textDecoration: "none",
              "&:hover": { backgroundColor: "#e3f2fd" },
            }}
            component={RouterLink}
            to={routes.detail(member.login)}
          >
            <div className="header-list detail-link">
              <Avatar
                sx={{ width: 60, height: 60, marginLeft: "8px" }}
                className="avatar"
                alt="avatar"
                src={member.avatarUrl}
              />
              <span> {member.id} </span>
              <span> {member.login} </span>
            </div>
          </Link>
          <Divider sx={{ width: "80%" }} />
        </React.Fragment>
      ))}
    </>
  );
};
