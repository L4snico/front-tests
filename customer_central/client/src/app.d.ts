namespace T {
    export interface Component<Props = {}> {
		build: (props: Props) => JSX.Element
	}
}
