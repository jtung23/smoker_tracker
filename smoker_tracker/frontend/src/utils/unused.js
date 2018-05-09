// from newSmokeInfo for finding interval

<MuiThemeProvider>
          	
<SelectField
  floatingLabelText="Interval"
  value={this.state.interval}
  onChange={this.handleChange}
>
  <MenuItem value={30} primaryText="30 minutes" />
  <MenuItem value={45} primaryText="45 miinutes" />
  <MenuItem value={60} primaryText="60 minutes" />
  <MenuItem value={90} primaryText="90 minutes" />
  <MenuItem value={120} primaryText="120 minutes" />
</SelectField>
</MuiThemeProvider>