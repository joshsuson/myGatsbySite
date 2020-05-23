import React from "react"
import { TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
	customForm: {
		margin: "0 auto"
	}
})

export default function FooterForm() {
	const classes = useStyles()
	return (
		<form className={classes.customForm}>
			<TextField
				id="firstname"
				variant="outlined"
				label="First Name"
			/>
			<TextField
				id="lastname"
				variant="outlined"
				label="Last Name"
			/>
			<TextField
				id="email"
				variant="outlined"
				label="E-Mail"
			/>
		</form>
	)
}
