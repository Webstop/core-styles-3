const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

function updateHugoConfig() {
  try {
    console.log('🔄 Updating Hugo configuration with package data...');

    // Read package.json
    const packagePath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    // Read existing Hugo config
    const configPath = path.join(__dirname, '..', 'config.yml');
    let config;

    try {
      const configContent = fs.readFileSync(configPath, 'utf8');
      config = yaml.load(configContent) || {};
      console.log('📖 Loaded existing config.yml');
    } catch (e) {
      console.log('📝 Creating new config.yml file');
      config = {};
    }

    // Ensure params object exists
    if (!config.params) {
      config.params = {};
    }

    // Add build information section
    if (!config.params.build) {
      config.params.build = {};
    }

    // Update build parameters
    config.params.build.version = packageJson.version;
    config.params.build.name = packageJson.name;
    config.params.build.description = packageJson.description || '';
    config.params.build.author = packageJson.author || '';
    config.params.build.license = packageJson.license || '';
    config.params.build.buildDate = new Date().toISOString();
    config.params.build.nodeVersion = process.version;

    // Add repository info if available
    if (packageJson.repository) {
      const repoUrl = typeof packageJson.repository === 'string'
        ? packageJson.repository
        : packageJson.repository.url;
      config.params.build.repository = repoUrl.replace(/^git\+/, '').replace(/\.git$/, '');
    }

    // Add homepage if available
    if (packageJson.homepage) {
      config.params.build.homepage = packageJson.homepage;
    }

    // Add version parts for more granular access
    const versionParts = packageJson.version.split('.');
    config.params.build.versionMajor = parseInt(versionParts[0]) || 0;
    config.params.build.versionMinor = parseInt(versionParts[1]) || 0;
    config.params.build.versionPatch = parseInt(versionParts[2]) || 0;

    // Write updated config back with proper formatting
    const yamlOptions = {
      indent: 2,
      lineWidth: 120,
      noRefs: true,
      sortKeys: false
    };

    fs.writeFileSync(configPath, yaml.dump(config, yamlOptions));

    // Success output
    console.log('✅ Hugo configuration updated successfully!');
    console.log(`📦 Package: ${packageJson.name}`);
    console.log(`🏷️  Version: ${packageJson.version}`);
    console.log(`🕒 Build date: ${new Date().toLocaleString()}`);
    console.log(`📁 Config file: ${configPath}`);

  } catch (error) {
    console.error('❌ Error updating Hugo config:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

// Run the function
updateHugoConfig();
