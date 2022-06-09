interface User {
    username: string,
    password: string,
    correct?: boolean | null,
}

const admin: User = {
    username: 'hugobosy',
    password: '12345',
}

export {admin}
export type { User }
