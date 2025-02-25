import { execCommand } from "../TestUtils/GeneralUtils";
import path from 'path';

jest.setTimeout(50000);

test('Go runtime testing', async () => {
    const compileCommand = `cd ${path.resolve(
     __dirname,
     './runtime-go'
    )} && go test`;
    await execCommand(compileCommand);
})

