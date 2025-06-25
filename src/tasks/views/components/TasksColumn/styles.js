export const styles = {
    columnBox: {
        flex: 1,
        backgroundColor: "neutral.black",
        borderRadius: 2,
        boxShadow: 2,
        p: 2,
        minHeight: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: 1,
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            width: 8,
            backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(100,100,100,0.3)",
            borderRadius: 8,
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
        },
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(100,100,100,0.3) transparent",
    },
};
