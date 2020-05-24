
// On development, we use typed-scss-modules to type every style class. We have this typing only in case
// we desire to launch the app without first launching typed-scss-modules, so typescript doesn't break

declare module '*.scss' {

    interface ClassNames {
        [className: string]: string;
    }

    const classNames: ClassNames;
    export = classNames;

}
