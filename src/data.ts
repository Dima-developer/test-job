export interface TeamMember {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}

type Role = "Administrator" | "Standard";

type Status = "request" | "pending" | "approved" | "declined" | "invited";

interface UserShortData {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}


export const UsersData: TeamMember[] = [
  {
    id: 1,
    status: 'approved',
    user: {
      id: 1,
      name: 'Joe',
      lastName: 'Bloggs',
      phone: '+353 1234567',
      email: 'joe.b@gmail.com'
    },
    role: 'Administrator'
  },
  {
    id: 2,
    status: 'approved',
    user: {
      id: 2,
      name: 'Sarah',
      lastName: 'Connors',
      phone: '+353 1234567',
      email: 'sarah.c@gmail.com'
    },
    role: 'Administrator'
  },
  {
    id: 3,
    status: 'invited',
    user: {
      id: 3,
      name: '+353 1234567',
      lastName: '',
      phone: '+353 1234567',
      email: '3531234567@gmail.com'
    },
    role: 'Standard'
  },
  {
    id: 4,
    status: 'approved',
    user: {
      id: 4,
      name: 'Joespeh',
      lastName: 'Bloggs',
      phone: '+353 1234567',
      email: 'joespeh.b@gmail.com'
    },
    role: 'Standard'
  },
  {
    id: 4,
    status: 'approved',
    user: {
      id: 4,
      name: 'Sarah',
      lastName: 'Connors',
      phone: '+353 1234567',
      email: 'sarah.c@gmail.com'
    },
    role: 'Standard'
  },
  {
    id: 5,
    status: 'approved',
    user: {
      id: 5,
      name: 'Mathew',
      lastName: 'Murphy',
      phone: '+353 1234567',
      email: 'mathew.m@gmail.com'
    },
    role: 'Standard'
  },
  {
    id: 4,
    status: 'approved',
    user: {
      id: 4,
      name: 'Joespeh',
      lastName: 'Bloggs',
      phone: '+353 1234567',
      email: 'joespeh.b@gmail.com'
    },
    role: 'Standard'
  },
  {
    id: 4,
    status: 'approved',
    user: {
      id: 4,
      name: 'Sarah',
      lastName: 'Connors',
      phone: '+353 1234567',
      email: 'sarah.c@gmail.com'
    },
    role: 'Standard'
  },
  {
    id: 5,
    status: 'approved',
    user: {
      id: 5,
      name: 'Mathew',
      lastName: 'Murphy',
      phone: '+353 1234567',
      email: 'mathew.m@gmail.com'
    },
    role: 'Standard'
  },
  {
    id: 4,
    status: 'approved',
    user: {
      id: 4,
      name: 'Joespeh',
      lastName: 'Bloggs',
      phone: '+353 1234567',
      email: 'joespeh.b@gmail.com'
    },
    role: 'Standard'
  },
];