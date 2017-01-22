export const environment = {
  production: true
};


const consoleMethods: string[] = [ 'assert', 'cd', 'clear', 'count', 'countReset',
  'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed',
  'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd',
  'select', 'table', 'time', 'timeEnd', 'timeStamp', 'timeline',
  'timelineEnd', 'trace', 'warn' ];
let length: number           = consoleMethods.length;
const console: Console         = ( (<any>window).console = <Console> ( window.console || {} ) );
let consoleMethod: string;
const noop: Function = function () {
};
while ( length -- ) {
  consoleMethod = consoleMethods[ length ];
  console[ consoleMethod ] = noop;
}

