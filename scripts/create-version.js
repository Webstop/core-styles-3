const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * Create readline interface for user input
 */
function createReadlineInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

/**
 * Prompt user for yes/no confirmation
 * @param {string} question - The question to ask the user
 * @returns {Promise<boolean>} - True if user confirms, false otherwise
 */
function promptUser(question) {
  return new Promise((resolve) => {
    const rl = createReadlineInterface();

    rl.question(question, (answer) => {
      rl.close();
      const normalizedAnswer = answer.toLowerCase().trim();

      // Accept y, yes, n, no (case-insensitive)
      if (normalizedAnswer === 'y' || normalizedAnswer === 'yes') {
        resolve(true);
      } else if (normalizedAnswer === 'n' || normalizedAnswer === 'no') {
        resolve(false);
      } else {
        // If invalid input, ask again
        console.log('Please answer with y/yes or n/no.');
        resolve(promptUser(question));
      }
    });
  });
}

/**
 * Recursively copy a directory and its contents
 * @param {string} src - Source directory path
 * @param {string} dest - Destination directory path
 */
function copyDirectory(src, dest) {
  try {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    // Read the source directory
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        // Recursively copy subdirectories
        copyDirectory(srcPath, destPath);
      } else {
        // Copy files
        fs.copyFileSync(srcPath, destPath);
      }
    }
  } catch (error) {
    throw new Error(`Failed to copy directory from ${src} to ${dest}: ${error.message}`);
  }
}

/**
 * Main function to create version folder structure
 */
async function createVersionFolder() {
  try {
    // Read package.json to get version
    const packageJsonPath = path.join(process.cwd(), 'package.json');

    if (!fs.existsSync(packageJsonPath)) {
      throw new Error('package.json not found in the current directory');
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const version = packageJson.version;

    if (!version) {
      throw new Error('Version not found in package.json');
    }

    console.log(`Creating version folder for v${version}...`);

    // Create versions directory if it doesn't exist
    const versionsDir = path.join(process.cwd(), 'versions');
    if (!fs.existsSync(versionsDir)) {
      fs.mkdirSync(versionsDir, { recursive: true });
      console.log('Created versions directory');
    }

    // Create version-specific directory
    const versionDir = path.join(versionsDir, `v${version}`);

    // Check if version directory already exists and prompt user
    if (fs.existsSync(versionDir)) {
      console.log(`\n⚠️  Version directory v${version} already exists.`);
      const shouldOverwrite = await promptUser(`Do you want to overwrite it? (y/n): `);

      if (!shouldOverwrite) {
        console.log('❌ Operation cancelled. Version folder was not overwritten.');
        process.exit(0);
      }

      console.log('🗑️  Removing existing version directory...');
      fs.rmSync(versionDir, { recursive: true, force: true });
    }

    fs.mkdirSync(versionDir, { recursive: true });
    console.log(`✅ Created version directory: v${version}`);

    // Copy dist folder if it exists
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      const destDistPath = path.join(versionDir, 'dist');
      copyDirectory(distPath, destDistPath);
      console.log('📁 Copied dist folder to version directory');
    } else {
      console.log('⚠️  Warning: dist folder not found, skipping dist copy');
    }

    // Create empty src directory
    const srcDir = path.join(versionDir, 'src');
    fs.mkdirSync(srcDir, { recursive: true });
    console.log('📁 Created empty src directory');

    // Copy js folder contents to src/js if js folder exists
    const jsPath = path.join(process.cwd(), 'js');
    if (fs.existsSync(jsPath)) {
      const destJsPath = path.join(srcDir, 'js');
      copyDirectory(jsPath, destJsPath);
      console.log('📁 Copied js folder contents to src/js');
    } else {
      console.log('⚠️  Warning: js folder not found, skipping js copy');
    }

    console.log(`\n🎉 Successfully created version structure:`);
    console.log(`   📁 versions/v${version}/`);
    console.log(`   ├── 📁 dist/ ${fs.existsSync(distPath) ? '(copied)' : '(skipped - not found)'}`);
    console.log(`   └── 📁 src/`);
    console.log(`       └── 📁 js/ ${fs.existsSync(jsPath) ? '(copied)' : '(skipped - not found)'}`);

  } catch (error) {
    console.error('❌ Error creating version folder:', error.message);
    process.exit(1);
  }
}

// Run the script
createVersionFolder().catch((error) => {
  console.error('❌ Unexpected error:', error.message);
  process.exit(1);
});
