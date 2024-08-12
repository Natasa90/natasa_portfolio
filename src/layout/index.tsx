const LayoutStyle = {
    fontSize: '22px',
    display: 'flex',
    flexFlow: 'column wrap',
    paddingBottom: '2rem'
};

export const Layout = ({children}: any) => {
    return (
        <main style={LayoutStyle}>
            {children}
        </main>
    )
};