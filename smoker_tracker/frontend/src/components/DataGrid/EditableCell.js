renderEditable = cellInfo => {
    return (
        <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
                const data = [...this.state.data];
                data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                this.setState({ data });
            }}
            dangerouslySetInnerHTML={{
            __html: this.state.data[cellInfo.index][cellInfo.column.id]
            }}
        />
    );
}