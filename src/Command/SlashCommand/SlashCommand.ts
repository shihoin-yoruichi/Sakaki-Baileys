import fs from 'fs';
import path from 'path';

class Slash
{	
   commands: any = new Map<string, string>(); 
   prefix: string = "/";
   description: string;
   name: string;


  protected async function loadCommands()
  {
    try
    {
      const foldersPath = path.join(dirname, 'commands');
      const commandFolders = fs.readdirSync(foldersPath);
      
      for ( const folder of commandFolders ) 
      {
      	const commandsPath = path.join(foldersPath, folder);
      	const commandFiles = fs.reddirSync(commandsPath).filter((file:any) => file.endWith('.ts'));
      	for ( const file of commandFiles )
      	{
      	 const filePath = path.join( commandssPath, file );
      	 const command = require(filePath);

      	 if ( 'data' in command && 'execute' in command )
      	 {
      	   commands.set(command.data.name, command);
      	 }
      	 else
      	 {
      	  console.log(`[WARNING] The command at ${filePath} in missing a required "data" or "execute" property`);	
      	 }
      	 
      	} 

      }   	
    }
    catch (e)
    {
     console.error(e);	
    }
  }

}

class SlashCommand extends Slash
{
   constructor()
   {
   	
   }


   setName(name: string)
   {
   	
   }

   setDescription(about: string)
   {

   }
}

