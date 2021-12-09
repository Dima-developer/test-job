import React, { FC, useEffect, useState } from 'react';
import { UsersData, TeamMember } from '../../data';
import classes from './users.module.css';

const Users: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [members, setMembers] = useState<TeamMember[] | []>([]);

  function getUsers(): Promise<TeamMember[]> {
    return new Promise((resolve) => setTimeout(() => resolve(UsersData), 2000));
  }

  useEffect(() => {
    getUsers().then((result) => {
      setMembers(result);
      setIsLoading(false);
    });
  }, []);

  const admin = members!.filter((item) => item!.role === 'Administrator');
  console.log('admin: ', admin);

  const invitedMembers = members!.filter((item) => item!.status === 'invited');
  console.log('invitedMembers: ', invitedMembers);

  const standardMember = members!.filter(
    (item) => item!.status === 'approved' && item!.role === 'Standard'
  );
  console.log('standardMember: ', standardMember);

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.titleSection}>
          <img src={'/assets/img/admin_logo.png'} alt='admin-logo' />
          <h2>Administrators</h2>
        </div>
        {isLoading ? (
          <p className={classes.listLoading}>Loading data...</p>
        ) : (
          <div className={classes.list}>
            {admin.map((item) => (
              <div className={classes.itemList}>
                <p>
                  {item.user.name} {item.user.lastName}
                </p>
                <img src='/assets/img/chevron-right.svg' alt='chevron right' />
              </div>
            ))}
            {invitedMembers.map((item) => (
              <div className={classes.itemList}>
                <p style={{ color: '#828B97' }}>
                  {item.user.name} {item.user.lastName}
                </p>
                <div>
                  <span>{item.status}</span>
                  <img
                    src='/assets/img/chevron-right.svg'
                    alt='chevron right'
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={classes.card}>
        <div className={classes.titleSection}>
          <img src={'/assets/img/person_logo.png'} alt='person-logo' />
          <h2>Standard Users</h2>
        </div>
        {isLoading ? (
          <p className={classes.listLoading}>Loading data...</p>
        ) : (
          <div className={classes.list}>
            {standardMember.map((item) => (
              <div className={classes.itemList}>
                <p>
                  {item.user.name} {item.user.lastName}
                </p>
                <img src='/assets/img/chevron-right.svg' alt='chevron right' />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Users;
